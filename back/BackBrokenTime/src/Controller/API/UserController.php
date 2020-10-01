<?php

namespace App\Controller\API;

use App\Entity\User;
use App\Repository\UserRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\SerializerInterface;
use Symfony\Component\Validator\Validator\ValidatorInterface;

class UserController extends AbstractController
{
    /**
     * @Route("/user/{id}", name="user_view", methods={"GET"}, requirements={"id"="\d+"})
     */
    public function view(User $user)
    {
        
        return $this->json($user, 200, [], [
            'groups' => 'user_view'
            ]);

    }

    /**
     * Méthode qui permet l'affichage de la liste des users
     * 
     * @Route("/user", name="user_list", methods={"GET"})
     */
    public function list(UserRepository $userRepository)
    {
        $users = $userRepository->findAll();

        // dd($fictions);

        return $this->json($users, 200, [], [
            'groups' => 'user_list'
        ]);
    }

    /**
     * @Route("/user/new", name="user_new", methods={"POST"})
     */
    public function new(Request $request, SerializerInterface $serializer, ValidatorInterface $validator)
    {
        $dataJSON = $request->getContent();

        $user = $serializer->deserialize($dataJSON, User::class, 'json');

        $errors = $validator->validate($user);
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
            $message = "L'utilisateur a bien créé";

            // ...on sauvegarde l'utilisateur en BDD
            $em = $this->getDoctrine()->getManager();
            $em->persist($user);
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
     * @Route("/user/{slug}/success", name="user_success")
     */
    public function success()
    {
        // return $this->render('user/index.html.twig', [
        //     'controller_name' => 'UserController',
        // ]);
    }

    /**
     * @Route("/user/{slug}/edit", name="user_edit")
     */
    public function edit()
    {
        // return $this->render('user/index.html.twig', [
        //     'controller_name' => 'UserController',
        // ]);
    }
}
