<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class LegalController extends AbstractController
{
    /**
     * Méthode permettant l'affichage de la page "mentions légal"
     * 
     * @Route("/mention-legales", name="legal_mentions")
     */
    public function mentions()
    {
        return $this->render('legal/mentions.html.twig', [
            'controller_name' => 'LegalController',
        ]);
    }

    /**
     * Méthode permettant l'affichage de la page "qui somme nous"
     * 
     * @Route("/qui-sommes-nous", name="legal_about")
     */
    public function about()
    {
        return $this->render('legal/about.html.twig', [
            'controller_name' => 'LegalController',
        ]);
    }

    /**
     * Méthode permettant l'affichage de la page "plan du site"
     * 
     * @Route("/plan-du-site", name="legal_plan")
     */
    public function plan()
    {
        return $this->render('legal/plan.html.twig', [
            'controller_name' => 'LegalController',
        ]);
    }
}
