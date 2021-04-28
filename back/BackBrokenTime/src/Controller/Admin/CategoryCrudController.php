<?php

namespace App\Controller\Admin;

use App\Entity\Category;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field\DateField;
use EasyCorp\Bundle\EasyAdminBundle\Field\IdField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;

class CategoryCrudController extends AbstractCrudController
{
    //? Ici on retourne la classe Category 
    public static function getEntityFqcn(): string
    {
        return Category::class;
    }

    //? Ici on indique ce que le dashboard dois afficher de la partie Category ( de notre bdd )
    public function configureFields(string $pageName): iterable
    {
        return [
            IdField::new('id', 'id'),
            TextField::new('name', 'Nom'),
            DateField::new('created_at', 'Date de création'),
        ];
    }
}
