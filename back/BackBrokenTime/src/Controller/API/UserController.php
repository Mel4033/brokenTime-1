<?php

namespace App\Controller\API;

use App\Entity\User;
use App\Repository\UserRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\SerializerInterface;
use Symfony\Component\Validator\Validator\ValidatorInterface;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;

/**
 * @Route("/api", name="api_")
 */
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
     * Retourne le détail d'un utilisateur en fonction de son Email
     *
     * @Route("/user/details")
     * @return void
     */
    public function userDetails(UserRepository $repository, Request $request, SerializerInterface $serialiser)
    {
        $dataJSON = $request->getContent();
        $contentArray = json_decode($dataJSON, true);
        $user = $repository->findOneBy(['email'=>$contentArray['email']]);
        return $this->json($user, 200, []);
    }

    /**
     * Méthode qui permet l'affichage de la liste des users
     * 
     * @Route("/user", name="user_list", methods={"GET"})
     */
    public function list(UserRepository $userRepository)
    {
        $users = $userRepository->findAll();

        // dd($users);

        return $this->json($users, 200, [], [
            'groups' => 'user_list'
        ]);
    }

    /**
     * @Route("/user/new", name="user_new", methods={"POST"})
     */
    public function new(Request $request, SerializerInterface $serializer, ValidatorInterface $validator, UserPasswordEncoderInterface $passwordEncoder)
    {
        $dataJSON = $request->getContent();

        $user = $serializer->deserialize($dataJSON, User::class, 'json');

        $plainPassword = $user->getPassword();

        $encodedPassword = $passwordEncoder->encodePassword($user, $plainPassword);
        $user->setPassword($encodedPassword);

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
     * @Route("/user/{id}/update", name="user_update", methods={"POST"})
     */
    public function update(User $user, Request $request, SerializerInterface $serializer, ValidatorInterface $validator, UserPasswordEncoderInterface $passwordEncoder)
    {

        $userUpdate = $this->getUser();

        $data = json_decode($request->getContent());

        foreach ($data as $key => $value){

            if($key && !empty($value)) {
                
                $name = ucfirst($key);
                $setter = 'set'.$name;
                $userUpdate->$setter($value);
            }
        }

        $plainPassword = $userUpdate->getPassword();

        $encodedPassword = $passwordEncoder->encodePassword($userUpdate, $plainPassword);
        $userUpdate->setPassword($encodedPassword);

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
            $message = "L'utilisateur a bien été mis à jour";

            // ...on sauvegarde l'utilisateur en BDD
             $this->getDoctrine()->getManager()->flush();
        }

        // On retourne un message pour dire que tout s'est bien passé...
        return $this->json([
            'success' => $success,
            'message' => $message,
            'errors' => $errors
        ]);

    }

    /**
     * @Route("/login_check", name="api_login_check")
     */
    public function apiLoginCheck()
    {
        throw new \LogicException('Le contenu de la route importe peu.');
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
