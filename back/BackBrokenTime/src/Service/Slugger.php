<?php

namespace App\Service;

use Symfony\Component\String\Slugger\AsciiSlugger;

/**
 * Service permettant la création d'un slug à partir d'une chaine de caractère donnée
 */
class Slugger
{
    private $slugger;

    public function __construct($lang = 'fr')
    {
        $this->slugger = new AsciiSlugger($lang);
    }

    public function slugify($stringValue)
    {
        return strtolower($this->slugger->slug($stringValue));
    }
}