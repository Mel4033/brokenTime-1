<?php

namespace App\Controller\API;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class FictionController extends AbstractController
{
    /**
     * @Route("/fiction{slug}", name="fiction_view")
     */
    public function view()
    {
        // return $this->render('fiction/index.html.twig', [
        //     'controller_name' => 'FictionController',
        // ]);
    }

    /**
     * @Route("/fiction}", name="fiction_list")
     */
    public function list()
    {
        // return $this->render('fiction/index.html.twig', [
        //     'controller_name' => 'FictionController',
        // ]);
    }
}
