<?php

namespace App\Controller\API;

use App\Entity\Category;
use App\Entity\Fiction;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class CategoryController extends AbstractController
{
    /**
     * Méthode qui permet l'affichage de la liste des catégories
     * 
     * @Route("/category/list", name="category_list")
     */
    public function list()
    {
        return $this->json([
            'groups' => 'category_list',
        ]);
    }

    /**
     * Méthode qui permet l'affichage de toutes les informations d'un path d'une fiction
     * 
     * @Route("/category/{id}", name="fiction_by_category", methods={"GET"}, requirements={"id":"\d+"})
     */
    public function fictionByCategory(Category $category)
    {
        // dd($path);
        return $this->json($category, 200, [], [
            'groups' => 'fiction_by_category'
        ]);
    }

}
