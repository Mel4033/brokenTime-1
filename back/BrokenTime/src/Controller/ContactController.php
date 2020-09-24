<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class ContactController extends AbstractController
{
    /**
     * Méthode permettant d'afficher la page contact et l'envois par mail du formulaire 
     * rempli par l'utilisateur
     * 
     * @Route("/contact", name="contact_send")
     */
    public function send()
    {
        return $this->render('contact/send.html.twig', [
            'controller_name' => 'ContactController',
        ]);
    }
}
