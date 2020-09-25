<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class UserController extends AbstractController
{
    /**
     * Méthode permettant l'affichage de la page "interface profil"
     * 
     * @Route("/user/{slug}", name="user_view")
     */
    public function view()
    {
        return $this->render('user/view.html.twig', [
            'controller_name' => 'UserController',
        ]);
    }

    /**
     * Méthode permettant l'affichage de la page "succès de l'utilisateur"
     * 
     * @Route("/user/{slug}/success", name="user_success")
     */
    public function success()
    {
        return $this->render('user/success.html.twig', [
            'controller_name' => 'UserController',
        ]);
    }

    /**
     * Méthode permettant l'affichage de la page "créationd d'un nouvel utilisateur"
     * 
     * @Route("/user/new", name="user_new")
     */
    public function new()
    {
        return $this->render('user/new.html.twig', [
            'controller_name' => 'UserController',
        ]);
    }

    /**
     * Méthode permettant l'affichage de la page "modification d'un utilisateur"
     * 
     * @Route("/user/edit/{slug}", name="user_edit")
     */
    public function edit()
    {
        return $this->render('user/edit.html.twig', [
            'controller_name' => 'UserController',
        ]);
    }
}
