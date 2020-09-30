<?php

namespace App\Controller\API;

use App\Entity\User;
use App\Repository\UserRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

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
