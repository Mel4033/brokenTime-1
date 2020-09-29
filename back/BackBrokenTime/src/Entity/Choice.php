<?php

namespace App\Entity;

use App\Repository\ChoiceRepository;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

/**
 * @ORM\Entity(repositoryClass=ChoiceRepository::class)
 */
class Choice
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     * 
     * @Groups({"fiction_view"})
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     * 
     * @Groups({"fiction_view", "fiction_path"})
     */
    private $text;

    /**
     * @ORM\ManyToOne(targetEntity=Path::class, inversedBy="choice")
     * @ORM\JoinColumn(nullable=false)
     */
    private $path;

    /**
     * @ORM\ManyToOne(targetEntity=Path::class, inversedBy="noChoice")
     */
    private $noChoice;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getText(): ?string
    {
        return $this->text;
    }

    public function setText(string $text): self
    {
        $this->text = $text;

        return $this;
    }

    public function getPath(): ?Path
    {
        return $this->path;
    }

    public function setPath(?Path $path): self
    {
        $this->path = $path;

        return $this;
    }

    public function getNoChoice(): ?Path
    {
        return $this->noChoice;
    }

    public function setNoChoice(?Path $noChoice): self
    {
        $this->noChoice = $noChoice;

        return $this;
    }
}
