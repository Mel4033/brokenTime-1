<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class LibraryController extends AbstractController
{
    /**
     * Méthode permettant l'affichage de la page "librairie"
     * 
     * @Route("/library", name="library_list")
     */
    public function list()
    {
        return $this->render('library/list.html.twig', [
            'controller_name' => 'LibraryController',
        ]);
    }
}
