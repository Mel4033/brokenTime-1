<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class FictionController extends AbstractController
{
    /**
     * Méthode permettant l'affichage d'une fiction
     * 
     * @Route("/fiction/{slug}", name="fiction_view")
     */
    public function view()
    {
        return $this->render('fiction/view.html.twig', [
            'controller_name' => 'FictionController',
        ]);
    }
}
