<?php

<<<<<<<< Updated upstream:backend/var/cache/dev/ContainerWKLXeHK/get_ServiceLocator_OhYd3VyService.php
namespace ContainerWKLXeHK;
========
namespace ContainerV6rZdjZ;

>>>>>>>> Stashed changes:backend/var/cache/dev/ContainerV6rZdjZ/get_ServiceLocator_OhYd3VyService.php

use Symfony\Component\DependencyInjection\Argument\RewindableGenerator;
use Symfony\Component\DependencyInjection\ContainerInterface;
use Symfony\Component\DependencyInjection\Exception\RuntimeException;

/**
 * @internal This class has been auto-generated by the Symfony Dependency Injection Component.
 */
class get_ServiceLocator_OhYd3VyService extends App_KernelDevDebugContainer
{
    /**
     * Gets the private '.service_locator.ohYd3Vy' shared service.
     *
     * @return \Symfony\Component\DependencyInjection\ServiceLocator
     */
    public static function do($container, $lazyLoad = true)
    {
        return $container->privates['.service_locator.ohYd3Vy'] = new \Symfony\Component\DependencyInjection\Argument\ServiceLocator($container->getService ??= $container->getService(...), [
            'cat' => ['privates', '.errored..service_locator.ohYd3Vy.App\\Entity\\Category', NULL, 'Cannot autowire service ".service_locator.ohYd3Vy": it needs an instance of "App\\Entity\\Category" but this type has been excluded in "config/services.yaml".'],
            'serializer' => ['privates', 'debug.serializer', 'getDebug_SerializerService', false],
        ], [
            'cat' => 'App\\Entity\\Category',
            'serializer' => '?',
        ]);
    }
}