<?php

namespace App\Controller;

use Symfony\Component\Serializer\SerializerInterface;
use Symfony\Component\HttpFoundation\JsonResponse;
use App\Entity\Movie;
use App\Entity\Category;
use App\Repository\MovieRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

class ApiController extends AbstractController
{
    #[Route('/api', name: 'app_api')]
    public function index(): Response
    {
        return $this->render('api/index.html.twig', [
            'controller_name' => 'ApiController',
        ]);
    }

<<<<<<< Updated upstream
    #[Route('/api/movie/{id}', name: 'app_api_movie')]
=======
    // #[Route('/api/movies', name: 'app_api_movies')]
    // public function readMovies(MovieRepository $movieRepository, SerializerInterface $serializer ): Response
    // {
    //     $mov = $movieRepository->findAll() ;
    //     $data = $serializer->normalize($mov, null, ['groups' => 'json_movie']);
    //     $response = new JsonResponse( $data );
    //     return $response;
    // }

    #[Route('/api/movies/{id}', name: 'app_api_movie')]
>>>>>>> Stashed changes
    public function readMovie(Movie $mov, SerializerInterface $serializer ): Response
    {
        $data = $serializer->normalize($mov, null, ['groups' => 'json_movie']);
        $response = new JsonResponse( $data );
        return $response;
    }

    #[Route('/api/category/{id}', name: 'app_api_category')]
    public function readCategory(Category $cat, SerializerInterface $serializer ): Response
    {
        $data = $serializer->normalize($cat, null, ['groups' => 'json_category']);
        $response = new JsonResponse( $data );
        return $response;
    }
}