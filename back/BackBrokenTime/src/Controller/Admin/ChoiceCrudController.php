<?php

namespace App\Controller\Admin;

use App\Entity\Choice;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field\AssociationField;
use EasyCorp\Bundle\EasyAdminBundle\Field\IntegerField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextareaField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;

class ChoiceCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return Choice::class;
    }

    
    public function configureFields(string $pageName): iterable
    {
        return [
            TextField::new('text', 'Choix'),
            AssociationField::new('path', 'Chemin associé'),
            IntegerField::new('toPath', 'Vers chemin'),
            TextareaField::new('content', 'Message complet'),
        ];
    }
    
}
