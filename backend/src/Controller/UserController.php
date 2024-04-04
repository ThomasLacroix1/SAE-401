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

class UserController extends AbstractController
{
    
    #[Route('/user/profile', name: 'app_user_watchlist')]
    public function actualUser(WatchlistRepository $watchlistRepository, SerializerInterface $serializer): Response
    {
        $user = $this->getUser();
        $watchlist = $this->$user->getWatchlist();
        // dd($watchlist->getUser());
        $normalizedUser = $serializer->normalize($this->$user, null, [AbstractNormalizer::CIRCULAR_REFERENCE_HANDLER => function ($object) {
            return $object->getId();
        }]);
        $data = array_merge($normalizedUser);
        return new JsonResponse($data);
    }

    #[Route('/user/addMovie/{id}', name: 'app_user_add_movie')]
    public function addMovie(Movie $mov, SerializerInterface $serializer): Response
    {
        $user = $this->getUser();
        $watchlist = $user->getWatchlist();
        $watchlist->addMovie($mov);
        dd($watchlist->getMovie());
        if ($watchlist->getMovie()->contains($mov)){
            return new JsonResponse(['Le film a été ajouté à votre liste avec succès.']);
        } else {
            return new JsonResponse(['Erreur']);
        }
    }
}
