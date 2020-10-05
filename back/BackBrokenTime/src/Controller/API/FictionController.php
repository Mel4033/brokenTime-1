<?php

namespace App\Controller\API;

use App\Entity\Fiction;
use App\Entity\Path;
use App\Repository\FictionRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\SerializerInterface;
use Symfony\Component\Validator\Validator\ValidatorInterface;

class FictionController extends AbstractController
{
    /**
     * Méthode qui permet l'affiche des informations d'une fiction
     * 
     * @Route("/fiction/{slug}", name="fiction_view", methods={"GET"})
     */
    public function view(Fiction $fiction)
    {

        // dd($fiction);
        return $this->json($fiction, 200, [], [
            'groups' => 'fiction_view'
            ]);
    }

    /**
     * Méthode qui permet l'affichage de la liste des fictions
     * 
     * @Route("/fiction", name="fiction_list", methods={"GET"})
     */
    public function list(FictionRepository $fictionRepository)
    {
        $fictions = $fictionRepository->findAll();

        // dd($fictions);

        return $this->json($fictions, 200, [], [
            'groups' => 'fiction_list'
        ]);
    }

    /**
     * Méthode permettant de créer une fiction
     * @Route("/fiction/new", name="fiction_new", methods={"POST"})
     */
    public function new(Request $request, SerializerInterface $serializer, ValidatorInterface $validator)
    {
        $dataJSON = $request->getContent();

        $fiction = $serializer->deserialize($dataJSON, Fiction::class, 'json');

        $errors = $validator->validate($fiction);
        $totalErrors = count($errors);
        $success = false;
        $message = '';

        if ($totalErrors > 0) {
            // Si on a des erreurs...alors on ne fait pas de sauvegarde...
            // Et on prévient l'utilisateur
            $message = "Il y a {$totalErrors} erreur(s) dans votre requete.";
        } else {
            // Pas d'erreur (à priori)
            $success = true;
            $message = "La fiction a bien créé";

            // ...on sauvegarde l'utilisateur en BDD
             $em = $this->getDoctrine()->getManager();
             $em->persist($fiction);
             $em->flush();
        }

        // On retourne un message pour dire que tout s'est bien passé...
        return $this->json([
            'success' => $success,
            'message' => $message,
            'errors' => $errors
        ]);

    }

    /**
     * Méthode qui permet l'affichage de toutes les informations d'un path d'une fiction
     * 
     * @Route("/fiction/{slug}/path/{number}", name="fiction_path", methods={"GET"})
     */
    public function path(Fiction $fiction, Path $path)
    {
        // dd($path);
        return $this->json($path, 200, [], [
            'groups' => 'fiction_path'
        ]);
    }
}
