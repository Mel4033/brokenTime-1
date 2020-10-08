<?php

namespace App\Entity;

use App\Repository\FictionRepository;
use Doctrine\Common\Collections\ArrayCollection;
use App\Service\Slugger;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

/**
 * @ORM\Entity(repositoryClass=FictionRepository::class)
 * @ORM\HasLifecycleCallbacks()
 *
 */
class Fiction
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     * 
     * @Groups({"fiction_list", "fiction_view", "fiction_by_category", "user_details"})
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     * 
     * @Groups({"fiction_list", "fiction_view", "fiction_by_category", "add_fiction", "user_details"})
     */
    private $title;

    /**
     * @ORM\Column(type="boolean", options={"default":0})
     * 
     * @Groups({"fiction_list", "fiction_view"})
     */
    private $status;

    /**
     * @ORM\Column(type="boolean", nullable=true, options={"default":0})
     * 
     * @Groups({"fiction_list", "fiction_view", "user_details"})
     */
    private $completed;

    /**
     * @ORM\Column(type="text", nullable=true)
     * 
     * @Groups({"fiction_list", "fiction_view", "user_details"})
     */
    private $summary;

    /**
     * @ORM\Column(type="decimal", nullable=true, options={"unsigned":true, "default":"0.00"})
     * 
     * @Groups({"fiction_list", "fiction_view"})
     */
    private $price;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     * 
     * @Groups({"fiction_list", "fiction_view", "user_details"})
     */
    private $picture;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $slug;

    /**
     * @ORM\Column(type="datetime")
     * 
     * @Groups({"fiction_list", "fiction_view"})
     */
    private $created_at;

    /**
     * @ORM\ManyToMany(targetEntity=Category::class, inversedBy="fictions")
     * 
     * @Groups({"fiction_list", "fiction_view"})
     */
    private $category;

    /**
     * @ORM\OneToMany(targetEntity=Path::class, mappedBy="fiction", orphanRemoval=true)
     * 
     * @Groups({"fiction_view"})
     */
    private $path;

    public function __construct()
    {
        $this->category = new ArrayCollection();
        $this->path = new ArrayCollection();

        $this->created_at = new \DateTime('NOW');
        $this->users = new ArrayCollection();
    }

    public function __toString() {
        return $this->title;
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getTitle(): ?string
    {
        return $this->title;
    }

    public function setTitle(string $title): self
    {
        $this->title = $title;

        return $this;
    }

    public function getStatus(): ?bool
    {
        return $this->status;
    }

    public function setStatus(bool $status): self
    {
        $this->status = $status;

        return $this;
    }

    public function getCompleted(): ?bool
    {
        return $this->completed;
    }

    public function setCompleted(bool $completed): self
    {
        $this->completed = $completed;

        return $this;
    }

    public function getSummary(): ?string
    {
        return $this->summary;
    }

    public function setSummary(?string $summary): self
    {
        $this->summary = $summary;

        return $this;
    }

    public function getPrice(): ?float
    {
        return $this->price;
    }

    public function setPrice(?float $price): self
    {
        $this->price = $price;

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

    public function getSlug(): ?string
    {
        return $this->slug;
    }

    public function setSlug(string $slug): self
    {
        $this->slug = $slug;

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

    /**
     * @return Collection|Category[]
     */
    public function getCategory(): Collection
    {
        return $this->category;
    }

    public function addCategory(Category $category): self
    {
        if (!$this->category->contains($category)) {
            $this->category[] = $category;
        }

        return $this;
    }

    public function removeCategory(Category $category): self
    {
        if ($this->category->contains($category)) {
            $this->category->removeElement($category);
        }

        return $this;
    }

    /**
     * @return Collection|Path[]
     */
    public function getPath(): Collection
    {
        return $this->path;
    }

    public function addPath(Path $path): self
    {
        if (!$this->path->contains($path)) {
            $this->path[] = $path;
            $path->setFiction($this);
        }

        return $this;
    }

    public function removePath(Path $path): self
    {
        if ($this->path->contains($path)) {
            $this->path->removeElement($path);
            // set the owning side to null (unless already changed)
            if ($path->getFiction() === $this) {
                $path->setFiction(null);
            }
        }

        return $this;
    }
}
