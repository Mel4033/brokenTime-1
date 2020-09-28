<?php

namespace App\Entity;

use App\Repository\MessageRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=MessageRepository::class)
 */
class Message
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="text")
     */
    private $text;

    /**
     * @ORM\Column(type="integer")
     */
    private $number;

    /**
     * @ORM\Column(type="boolean")
     */
    private $lastMessage;

    /**
     * @ORM\ManyToOne(targetEntity=Character::class, inversedBy="message")
     * @ORM\JoinColumn(nullable=false)
     */
    private $byCharacter;

    /**
     * @ORM\ManyToOne(targetEntity=Path::class, inversedBy="message")
     * @ORM\JoinColumn(nullable=false)
     */
    private $path;

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

    public function getNumber(): ?int
    {
        return $this->number;
    }

    public function setNumber(int $number): self
    {
        $this->number = $number;

        return $this;
    }

    public function getLastMessage(): ?bool
    {
        return $this->lastMessage;
    }

    public function setLastMessage(bool $lastMessage): self
    {
        $this->lastMessage = $lastMessage;

        return $this;
    }

    public function getByCharacter(): ?Character
    {
        return $this->byCharacter;
    }

    public function setByCharacter(?Character $byCharacter): self
    {
        $this->byCharacter = $byCharacter;

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
}
