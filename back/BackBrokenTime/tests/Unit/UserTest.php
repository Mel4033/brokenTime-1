<?php 
declare(strict_types=1);

namespace App\Tests\Unit;

use App\Entity\User;
use PHPUnit\Framework\TestCase;

class UserTest extends TestCase 
{
  private User $user;

  protected function setUp(): void
  {
    parent::setUp();
    // creation of an entity according to our class ( user )
    $this->user = new User();
  }


  // creation of testGetEmail function with a void return and we are going to test our setEmail function and our getUsername.
  public function testGetEmail(): void
  {
    $value = 'test@test.fr';
    $response = $this->user->setEmail($value);

    self::assertInstanceOf(expected: User::class, $response);
    self::assertEquals($value, $this->user->getEmail());
    self::assertEquals($value, $this->user->getUsername());
  }

  // check test of the getRoles function which should return an array to us, which is why I use assertContains.
  public function testGetRoles(): void
  {
    $value = ['ROLE_ADMIN'];
    $response = $this->user->setRoles($value);
    
    self::assertInstanceOf(expected: User::class, $response);
    self::assertContains(needle: 'ROLE_USER', $this->user->getRoles());
    self::assertContains(needle: 'ROLE_ADMIN', $this->user->getRoles());
  }

  // I will here do a verification test for my getPassword function.
  public function testGetPassword(): void
  {
    $value = 'password';
    $response = $this->user->setPassword($value);
    
    self::assertInstanceOf(expected: User::class, $response);
    self::assertContains($value, $this->user->getPassword());
  }
}