<?php

namespace App\Controller;

use Symfony\Component\Serializer\SerializerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Attribute\Route;
use App\Repository\WatchlistRepository;
use App\Repository\UserRepository;
use Symfony\Component\Serializer\Normalizer\AbstractNormalizer;
use App\Entity\Movie;
use App\Entity\User;
use Doctrine\ORM\EntityManagerInterface;

class UserController extends AbstractController
{

    #[Route('/user/set_email', name: 'app_user_set_email')]
    public function setEmail(Request $request, EntityManagerInterface $entityManager): Response
    {
        $email = $request->query->get('email');
    
        $this->getUser()->setEmail($email);

        $entityManager->persist($this->getUser());
        $entityManager->flush();

        return new Response("true");
    }
}
