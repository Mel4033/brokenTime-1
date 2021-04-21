<?php 

namespace App\Tests\Unit;

// WebTestCase is a new class that allows us to write new tests related to requests and responses.
use Symfony\Bundle\FrameworkBundle\Test\WebTestCase;
use Symfony\Component\HttpFoundation\Response;

// We will write the test here to check the route to the Library.
class PageControllerTest extends WebTestCase
{
  public function testLibraryPage()
  {
    $client = static::createClient();
    // is a new class that allows us to write new tests related to requests and responses.
    $client->request(method: 'GET', url: '/library');
    // here I expect the response status to be type 200.
    $this->assertResponseStatusCodeSame( expectedCode: Response::HTTP_OK);
  }

  // We will write the test here to check the route to the Contact.
  public function testContactPage()
  {
    $client = static::createClient();
    // is a new class that allows us to write new tests related to requests and responses.
    $client->request(method: 'GET', url: '/Contact');
    // here I expect the response status to be type 200.
    $this->assertResponseStatusCodeSame( expectedCode: Response::HTTP_OK);
  }

    // We will write the test here to check the route to the TeamPage.
    public function testTeamPagePage()
    {
      $client = static::createClient();
      // is a new class that allows us to write new tests related to requests and responses.
      $client->request(method: 'GET', url: '/TeamPage');
      // here I expect the response status to be type 200.
      $this->assertResponseStatusCodeSame( expectedCode: Response::HTTP_OK);
    }
}
