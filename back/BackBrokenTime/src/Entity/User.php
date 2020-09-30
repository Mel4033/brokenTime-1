<?php

namespace App\Entity;

use App\Repository\UserRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

/**
 * @ORM\Entity(repositoryClass=UserRepository::class)
 */
class User
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     * @Groups({"user_list"})
     */
     private $id;

    /**
     * @ORM\Column(type="string", length=255)
     * 
     * @Groups({"fiction_path", "user_list", "user_view", "fiction_path"})
     *
     */
    private $name;

    /**
     *
     * @ORM\Column(type="string", length=255, nullable=true)
     * 
     * @Groups({"fiction_path", "user_list", "user_view", "fiction_path"})
     */
    private $picture;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups({"user_view"})
     */
    private $email;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups({"user_view"})
     */
    private $password;

    /**
     * @ORM\Column(type="datetime")
     * @Groups({"user_view"})
     */
    private $created_at;

    /**
     * @ORM\Column(type="datetime", nullable=true)
     * @Groups({"user_view"})
     */
    private $updated_at;

    /**
     * @ORM\ManyToOne(targetEntity=Role::class, inversedBy="users")
     * @ORM\JoinColumn(nullable=false)
     * @Groups({"user_list", "user_view"})
     */
    private $role;

    /**
     * @ORM\ManyToMany(targetEntity=Fiction::class, inversedBy="users")
     * @Groups({"user_view"})
     */
    private $Fiction;

    public function __construct()
    {
        $this->Fiction = new ArrayCollection();
    }

    public function __toString() {
        return $this->id . " - " .$this->name;
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

    public function getPicture(): ?string
    {
        return $this->picture;
    }

    public function setPicture(?string $picture): self
    {
        $this->picture = $picture;

        return $this;
    }

    public function getEmail(): ?string
    {
        return $this->email;
    }

    public function setEmail(string $email): self
    {
        $this->email = $email;

        return $this;
    }

    public function getPassword(): ?string
    {
        return $this->password;
    }

    public function setPassword(string $password): self
    {
        $this->password = $password;

        return $this;
    }

    public function getCreatedAt(): ?\DateTimeInterface
    {
        return $this->created_at;
    }

    public function setCreatedAt(\DateTimeInterface $created_at): self
    {
        $this->created_at = $created_at;

        return $this;
    }

    public function getUpdatedAt(): ?\DateTimeInterface
    {
        return $this->updated_at;
    }

    public function setUpdatedAt(?\DateTimeInterface $updated_at): self
    {
        $this->updated_at = $updated_at;

        return $this;
    }

    public function getRole(): ?Role
    {
        return $this->role;
    }

    public function setRole(?Role $role): self
    {
        $this->role = $role;

        return $this;
    }

    /**
     * @return Collection|Fiction[]
     */
    public function getFiction(): Collection
    {
        return $this->Fiction;
    }

    public function addFiction(Fiction $fiction): self
    {
        if (!$this->Fiction->contains($fiction)) {
            $this->Fiction[] = $fiction;
        }

        return $this;
    }

    public function removeFiction(Fiction $fiction): self
    {
        if ($this->Fiction->contains($fiction)) {
            $this->Fiction->removeElement($fiction);
        }

        return $this;
    }
}
