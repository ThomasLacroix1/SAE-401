<?php

namespace App\Controller;

use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Serializer\SerializerInterface;
use App\Entity\Movie;
use App\Entity\Category;
use App\Entity\User;
use App\Entity\Watchlist;
use App\Repository\CategoryRepository;
use App\Repository\MovieRepository;
use App\Repository\UserRepository;
use App\Repository\WatchlistRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Serializer\Normalizer\AbstractNormalizer;

class ApiController extends AbstractController
{
    #[Route('/api', name: 'app_api')]
    public function index(): Response
    {
        return $this->render('api/index.html.twig', [
            'controller_name' => 'ApiController',
        ]);
    }

    #[Route('/api/movies', name: 'app_api_movies')]
    public function readMovies(MovieRepository $movieRepository, SerializerInterface $serializer ): Response
    {
        $mov = $movieRepository->findAll() ;
        $data = $serializer->normalize($mov, null, ['groups' => 'json_movie']);
        $response = new JsonResponse( $data );
        return $response;
    }

    #[Route('/api/movies/{id}', name: 'app_api_movie')]
    public function readMovie(Movie $mov, SerializerInterface $serializer ): Response
    {
        $data = $serializer->normalize($mov, null, ['groups' => 'json_movie']);
        $response = new JsonResponse( $data );
        return $response;
    }

    #[Route('/api/categories', name: 'app_api_categories')]
    public function readCategories(CategoryRepository $catRepository, SerializerInterface $serializer ): Response
    {
        $cat = $catRepository->findAll() ;
        $data = $serializer->normalize($cat, null, ['groups' => 'json_category']);
        $response = new JsonResponse( $data );
        return $response;
    }

    #[Route('/api/categories/{id}', name: 'app_api_category')]
    public function readCategory(Category $cat, SerializerInterface $serializer, MovieRepository $movieRepository): Response
    {
        $movies = $movieRepository->findByCategory($cat);
        
        $normalizedMovies = $serializer->normalize($movies, null, ['groups' => 'json_movie']);

        $normalizedCategory = $serializer->normalize($cat, null, ['groups' => 'json_category']);

        $data = array_merge($normalizedCategory, ['movies' => $normalizedMovies]);

        return new JsonResponse($data);
    }

    #[Route('/api/movies_in_front', name: 'app_api_movies_in_front')]
    public function readMoviesInFront(MovieRepository $movieRepository, SerializerInterface $serializer ): Response
    {
        $mov = $movieRepository->findInFront() ;
        $data = $serializer->normalize($mov, null, ['groups' => 'json_movie']);
        $response = new JsonResponse( $data );
        return $response;
    }
    
    // #[Route('/api/actual_user', name: 'app_api_actual_user')]
    // public function actualUser(WatchlistRepository $watchlistRepository, SerializerInterface $serializer): Response
    // {
    //     $watchlist = $this->getUser()->getWatchlist()->getMovie();
    //     $normalizedUser = $serializer->normalize($watchlist, null, [AbstractNormalizer::CIRCULAR_REFERENCE_HANDLER => function ($object) {
    //         return $object->getId();
    //     }]);        
    //     $data = array_merge($normalizedUser);
    //     return new JsonResponse($data);
    // }
}