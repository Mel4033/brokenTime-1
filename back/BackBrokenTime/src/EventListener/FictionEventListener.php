<?php

namespace App\EventListener;

use App\Entity\Fiction;
use App\Service\Slugger;
use Doctrine\Persistence\Event\LifecycleEventArgs;

class FictionEventListener {

    private $slugger;
    public function __construct(Slugger $slugger)
    {
        $this->slugger = $slugger;
    }

    public function prePersist(LifecycleEventArgs $args) {

        $fiction = $args->getObject();

        if (!$fiction instanceof Fiction) {
            return;
        }

        $slug = $this->slugger->slugify($fiction->getTitle());
        $fiction->setSlug($slug);

    }

    public function preUpdate(LifecycleEventArgs $args) {

        $fiction = $args->getObject();

        if (!$fiction instanceof Fiction) {
            return;
        }
        
        $slug = $this->slugger->slugify($fiction->getTitle());
        $fiction->setSlug($slug);

    }
}