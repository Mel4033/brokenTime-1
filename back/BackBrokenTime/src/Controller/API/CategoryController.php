<?php

namespace App\Controller\API;

use App\Entity\Category;
use App\Entity\Fiction;
use App\Repository\CategoryRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/api", name="api_")
 */
class CategoryController extends AbstractController
{
    /**
     * Méthode qui permet l'affichage de la liste des catégories
     * 
     * @Route("/category/list", name="category_list")
     */
    public function list(CategoryRepository $repository)
    {   
        //? On récupère la liste de toutes les catégories
        $categories = $repository->findAll();
        
        //? On envois au format JSON la liste
        return $this->json($categories, 200, [], [
            'groups' => 'category_list',
        ]);
    }

    /**
     * Méthode qui permet l'affichage des fiction d'une catégorie
     * 
     * @Route("/category/{id}", name="fiction_by_category", methods={"GET"}, requirements={"id":"\d+"})
     */
    public function fictionByCategory(Category $category)
    {
        //? Retourne la liste des fictions lié à une catégorie
        return $this->json($category, 200, [], [
            'groups' => 'fiction_by_category'
        ]);
    }

}
