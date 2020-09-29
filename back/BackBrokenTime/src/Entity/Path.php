<?php

namespace App\Entity;

use App\Repository\PathRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

/**
 * @ORM\Entity(repositoryClass=PathRepository::class)
 */
class Path
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
    private $name;

    /**
     * @ORM\Column(type="boolean", options={"default":0})
     * 
     * @Groups({"fiction_view", "fiction_path"})
     */
    private $winPath;

    /**
     * @ORM\Column(type="boolean", options={"default":0})
     * 
     * @Groups({"fiction_view", "fiction_path"})
     */
    private $LosePath;

    /**
     * @ORM\Column(type="integer", options={"unsigned":true})
     * 
     * @Groups({"fiction_view", "fiction_path"})
     * 
     * 
     */
    private $number;

    /**
     * @ORM\ManyToOne(targetEntity=Fiction::class, inversedBy="path")
     * @ORM\JoinColumn(nullable=false)
     * 
     * 
     */
    private $fiction;

    /**
     * @ORM\OneToMany(targetEntity=Choice::class, mappedBy="path", orphanRemoval=true)
     * 
     * @Groups({"fiction_view", "fiction_path"})
     */
    private $choice;

    /**
     * @ORM\OneToMany(targetEntity=Choice::class, mappedBy="noChoice")
     */
    private $noChoice;

    /**
     * @ORM\OneToMany(targetEntity=Message::class, mappedBy="path", orphanRemoval=true)
     * 
     * @Groups({"fiction_view", "fiction_path"})
     */
    private $message;

    public function __construct()
    {
        $this->choice = new ArrayCollection();
        $this->noChoice = new ArrayCollection();
        $this->message = new ArrayCollection();
    }

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

    public function getFiction(): ?Fiction
    {
        return $this->fiction;
    }

    public function setFiction(?Fiction $fiction): self
    {
        $this->fiction = $fiction;

        return $this;
    }

    /**
     * @return Collection|Choice[]
     */
    public function getChoice(): Collection
    {
        return $this->choice;
    }

    public function addChoice(Choice $choice): self
    {
        if (!$this->choice->contains($choice)) {
            $this->choice[] = $choice;
            $choice->setPath($this);
        }

        return $this;
    }

    public function removeChoice(Choice $choice): self
    {
        if ($this->choice->contains($choice)) {
            $this->choice->removeElement($choice);
            // set the owning side to null (unless already changed)
            if ($choice->getPath() === $this) {
                $choice->setPath(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|Choice[]
     */
    public function getNoChoice(): Collection
    {
        return $this->noChoice;
    }

    public function addNoChoice(Choice $noChoice): self
    {
        if (!$this->noChoice->contains($noChoice)) {
            $this->noChoice[] = $noChoice;
            $noChoice->setNoChoice($this);
        }

        return $this;
    }

    public function removeNoChoice(Choice $noChoice): self
    {
        if ($this->noChoice->contains($noChoice)) {
            $this->noChoice->removeElement($noChoice);
            // set the owning side to null (unless already changed)
            if ($noChoice->getNoChoice() === $this) {
                $noChoice->setNoChoice(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|Message[]
     */
    public function getMessage(): Collection
    {
        return $this->message;
    }

    public function addMessage(Message $message): self
    {
        if (!$this->message->contains($message)) {
            $this->message[] = $message;
            $message->setPath($this);
        }

        return $this;
    }

    public function removeMessage(Message $message): self
    {
        if ($this->message->contains($message)) {
            $this->message->removeElement($message);
            // set the owning side to null (unless already changed)
            if ($message->getPath() === $this) {
                $message->setPath(null);
            }
        }

        return $this;
    }
}
