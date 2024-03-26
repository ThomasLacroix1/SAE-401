<?php

namespace ContainerLuwdg6x;


use Symfony\Component\DependencyInjection\Argument\RewindableGenerator;
use Symfony\Component\DependencyInjection\ContainerInterface;
use Symfony\Component\DependencyInjection\Exception\RuntimeException;

/**
 * @internal This class has been auto-generated by the Symfony Dependency Injection Component.
 */
class get_ServiceLocator_RvdmmlkService extends App_KernelDevDebugContainer
{
    /**
     * Gets the private '.service_locator.rvdmmlk' shared service.
     *
     * @return \Symfony\Component\DependencyInjection\ServiceLocator
     */
    public static function do($container, $lazyLoad = true)
    {
        return $container->privates['.service_locator.rvdmmlk'] = new \Symfony\Component\DependencyInjection\Argument\ServiceLocator($container->getService ??= $container->getService(...), [
            'movieRepository' => ['privates', 'App\\Repository\\MovieRepository', 'getMovieRepositoryService', true],
            'serializer' => ['privates', 'debug.serializer', 'getDebug_SerializerService', false],
        ], [
            'movieRepository' => 'App\\Repository\\MovieRepository',
            'serializer' => '?',
        ]);
    }
}
