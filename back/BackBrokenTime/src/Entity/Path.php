<?php

namespace App\Entity;

use App\Repository\PathRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=PathRepository::class)
 */
class Path
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $name;

    /**
     * @ORM\Column(type="boolean")
     */
    private $winPath;

    /**
     * @ORM\Column(type="boolean")
     */
    private $LosePath;

    /**
     * @ORM\Column(type="integer")
     */
    private $number;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): self
    {
        $this->name = $name;

        return $this;
    }

    public function getWinPath(): ?bool
    {
        return $this->winPath;
    }

    public function setWinPath(bool $winPath): self
    {
        $this->winPath = $winPath;

        return $this;
    }

    public function getLosePath(): ?bool
    {
        return $this->LosePath;
    }

    public function setLosePath(bool $LosePath): self
    {
        $this->LosePath = $LosePath;

        return $this;
    }

    public function getNumber(): ?int
    {
        return $this->number;
    }

    public function setNumber(int $number): self
    {
        $this->number = $number;

        return $this;
    }
}
