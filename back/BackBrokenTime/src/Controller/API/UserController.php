<?php

namespace App\Controller\API;

use App\Entity\Fiction;
use App\Entity\User;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\SerializerInterface;
use Symfony\Component\Validator\Validator\ValidatorInterface;
use Symfony\Component\Security\Core\User\UserInterface;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;

/**
 * @Route("/api", name="api_")
 */
class UserController extends AbstractController
{
    /**
     * Retourne le détail de l'utilisateur connecté
     *
     * @Route("/user/details", name="user_details")
     * @return void
     */
    public function userDetails()
    {
        // Récupère l'utilisateur connecté
        $user = $this->getUser();

        // Retourne le détails de l'utilisateur au format JSON
        return $this->json($user, 200, [], [
            'groups' => 'user_details'
            ]);
    }

    /**
     * Méthode permettant la création d'un nouvel utilisateur
     * 
     * @Route("/user/new", name="user_new", methods={"POST"})
     */
    public function new(Request $request, SerializerInterface $serializer, ValidatorInterface $validator, UserPasswordEncoderInterface $passwordEncoder)
    {
        // On récupère les données de l'utilisateur reçu par le formulaire en Front
        $dataJSON = $request->getContent();

        // On met en place un nouvel utilisateur avec les données reçu 
        // en JSON qu'on désérialize 
        $user = $serializer->deserialize($dataJSON, User::class, 'json');

        // On récupère le mot de passe de cet utilisateur
        $plainPassword = $user->getPassword();

        // On encode le mot de passe de cet utilisateur
        $encodedPassword = $passwordEncoder->encodePassword($user, $plainPassword);

        // On enregistre le mot de passe encodé de l'utilisateur
        $user->setPassword($encodedPassword);

        // On vérifie que toutes les données attendu pour ce nouvel
        // utilisateur sont bien reçus, si il manque des informations on 
        // ajoute une erreur
        $errors = $validator->validate($user);

        // On récupère le nombre d'erreurs
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

        // On retourne un message en JSON pour dire que tout s'est bien passé...
        return $this->json([
            'success' => $success,
            'message' => $message,
            'errors' => $errors
        ]);

    }

    /**
     * Méthode permettant de modifier le profil de l'utilisateur connecté
     * 
     * @Route("/user/update", name="user_update", methods={"PATCH"})
     */
    public function update(Request $request, ValidatorInterface $validator, UserPasswordEncoderInterface $passwordEncoder)
    {

        // On récupère l'utilisateur connecté
        $userUpdate = $this->getUser();

        // On récupère et on décode les données en JSON reçu du front
        // pour créer un tableau associatif
        $data = json_decode($request->getContent(), true);

        foreach ($data as $key => $value){

            // Pour chaque informations reçu si il y a bien 
            // une clé et une valeur associée
            if ($key && !empty($value)) {

                // On met en majuscule le premier caractère de la clé ( ex: pseudo -> Pseudo)
                $name = ucfirst($key);
                // On met en place les setters en fonction du nom de clés
                $setter = 'set'.$name;
                // On enregistre les données reçu pour l"utilisateur ( ex: setPseudo("value"))
                $userUpdate->$setter($value);
            }
        }

        // Si dans les informations reçu lors de la modification il existe une clé "password"
        if(array_key_exists("password", $data)) {
            
            // On récupère le mot de passe reçu
            $plainPassword = $userUpdate->getPassword();
            
            // On encode ce mot de passe
            $encodedPassword = $passwordEncoder->encodePassword($userUpdate, $plainPassword);

            // On enregistre le nouveau mot de passe une fois encodé
            $userUpdate->setPassword($encodedPassword);
        }

            // On vérifie que toutes les données attendu pour ce nouvel
            // utilisateur sont bien reçus, si il manque des informations on 
            // ajoute une erreur
            $errors = $validator->validate($userUpdate);

            // On récupère le nombre d'erreurs
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
            $message = "L'utilisateur a bien été mis à jour";

            // ...on sauvegarde l'utilisateur en BDD
             $this->getDoctrine()->getManager()->flush();
        }

        // On retourne un message en JSON pour dire que tout s'est bien passé...
        return $this->json([
            'success' => $success,
            'message' => $message,
            'errors' => $errors
        ]);

    }

    /**
     * Méthode permettant de vérifier la connexion de l'utilisateur et lui fournir le token
     * 
     * @Route("/login_check", name="api_login_check")
     */
    public function apiLoginCheck()
    {
        throw new \LogicException('Le contenu de la route importe peu.');
    }

    /**
     * Méthode pour ajouter une fiction à un utilisateur en fonction de l'id de la fiction
     * 
     * @Route("/addfiction/{id}", name="add_fiction", requirements={"id":"\d+"})
     */
    public function addFictionToUser(Fiction $fiction)
    {
        // On récupère l'utilisateur connecté
        $user = $this->getUser();
        
        // On ajoute la fiction à l'utilisateur
        $user->addFiction($fiction);

        // On l'enregistre en bdd
        $this->getDoctrine()->getManager()->flush();
        
        $message = "La fiction a bien été ajoutée";

        // On retourne un message en JSON pour indiquer que tout s'est bien passé
        return $this->json([
           'message' => $message,    
        ]);
    }

    /**
     * Méthode pour l'affichage des succès débloqués par l'utilisateur ( V2 )
     * 
     * @Route("/user/{slug}/success", name="user_success")
     */
    public function success()
    {
        // return $this->render('user/index.html.twig', [
        //     'controller_name' => 'UserController',
        // ]);
    }

}
