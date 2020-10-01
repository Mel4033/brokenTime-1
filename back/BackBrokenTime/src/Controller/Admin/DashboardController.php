<?php

namespace App\Controller\Admin;

use App\Entity\Category;
use App\Entity\Character;
use App\Entity\User;
use App\Entity\Choice;
use App\Entity\Fiction;
use App\Entity\Message;
use App\Entity\Path;
use EasyCorp\Bundle\EasyAdminBundle\Config\Crud;
use EasyCorp\Bundle\EasyAdminBundle\Config\Dashboard;
use EasyCorp\Bundle\EasyAdminBundle\Config\MenuItem;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractDashboardController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class DashboardController extends AbstractDashboardController
{
    /**
     * @Route("/admin", name="admin")
     */
    public function index(): Response
    {
        return parent::index();
    }

    public function configureDashboard(): Dashboard
    {
        return Dashboard::new()
            ->setTitle('BackBrokenTime');
    }

    public function configureCrud(): Crud
    {
        return Crud::new()
            ->setDateFormat('d/MM/y')
            // this defines the pagination size for all CRUD controllers
            // (each CRUD controller can override this value if needed)
            ->setPaginatorPageSize(30)
        ;
    }

    public function configureMenuItems(): iterable
    {
        yield MenuItem::linktoDashboard('Dashboard', 'fa fa-home');
        yield MenuItem::linkToCrud('Categories', 'fa fa-cat', Category::class);
        yield MenuItem::subMenu('Fictions', 'fa fa-cat')->setSubItems([
            MenuItem::linkToCrud('Informations', 'fa fa-cat', Fiction::class),
            MenuItem::linkToCrud('Chemins', 'fa fa-cat', Path::class),
            MenuItem::linkToCrud('Personnages', 'fa fa-cat', Character::class),
            MenuItem::linkToCrud('Messages', 'fa fa-cat', Message::class),
            MenuItem::linkToCrud('Choix', 'fa fa-cat', Choice::class),
        ]);
        yield MenuItem::linkToCrud('Utilisateurs', 'fa fa-cat', User::class);
    }
}
