<?php

namespace App\Controller\Admin;

use App\Entity\Fiction;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field\AssociationField;
use EasyCorp\Bundle\EasyAdminBundle\Field\BooleanField;
use EasyCorp\Bundle\EasyAdminBundle\Field\CollectionField;
use EasyCorp\Bundle\EasyAdminBundle\Field\DateField;
use EasyCorp\Bundle\EasyAdminBundle\Field\ImageField;
use EasyCorp\Bundle\EasyAdminBundle\Field\MoneyField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextareaField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;

class FictionCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return Fiction::class;
    }

    
    public function configureFields(string $pageName): iterable
    {
        return [
            TextField::new('title', 'Titre'),
            TextField::new('picture', 'Image'),
            BooleanField::new('status', 'Active'),
            TextareaField::new('summary', 'Résumé'),
            MoneyField::new('price', 'Prix')->setCurrency('EUR'),
            DateField::new('created_at', 'Date de création'),
            AssociationField::new('category', 'catégories'),
            AssociationField::new('path', 'chemin'),
        ];
    }
    
}
