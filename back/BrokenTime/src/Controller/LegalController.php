<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class LegalController extends AbstractController
{
    /**
     * @Route("/mention-legales", name="legal_mentions")
     */
    public function mentions()
    {
        return $this->render('legal/index.html.twig', [
            'controller_name' => 'LegalController',
        ]);
    }

    /**
     * @Route("/qui-sommes-nous", name="legal_about")
     */
    public function about()
    {
        return $this->render('legal/index.html.twig', [
            'controller_name' => 'LegalController',
        ]);
    }

    /**
     * @Route("/plan-du-site", name="legal_plan")
     */
    public function plan()
    {
        return $this->render('legal/index.html.twig', [
            'controller_name' => 'LegalController',
        ]);
    }
}
