<?php

<<<<<<<< Updated upstream:backend/var/cache/dev/ContainerWKLXeHK/getCommonPreConfiguratorService.php
namespace ContainerWKLXeHK;
========
namespace ContainerV6rZdjZ;

>>>>>>>> Stashed changes:backend/var/cache/dev/ContainerV6rZdjZ/getCommonPreConfiguratorService.php

use Symfony\Component\DependencyInjection\Argument\RewindableGenerator;
use Symfony\Component\DependencyInjection\ContainerInterface;
use Symfony\Component\DependencyInjection\Exception\RuntimeException;

/**
 * @internal This class has been auto-generated by the Symfony Dependency Injection Component.
 */
class getCommonPreConfiguratorService extends App_KernelDevDebugContainer
{
    /**
     * Gets the private 'EasyCorp\Bundle\EasyAdminBundle\Field\Configurator\CommonPreConfigurator' shared service.
     *
     * @return \EasyCorp\Bundle\EasyAdminBundle\Field\Configurator\CommonPreConfigurator
     */
    public static function do($container, $lazyLoad = true)
    {
        include_once \dirname(__DIR__, 4).'/vendor/easycorp/easyadmin-bundle/src/Contracts/Field/FieldConfiguratorInterface.php';
        include_once \dirname(__DIR__, 4).'/vendor/easycorp/easyadmin-bundle/src/Field/Configurator/CommonPreConfigurator.php';

        $a = ($container->privates['EasyCorp\\Bundle\\EasyAdminBundle\\Factory\\EntityFactory'] ?? self::getEntityFactoryService($container));

        if (isset($container->privates['EasyCorp\\Bundle\\EasyAdminBundle\\Field\\Configurator\\CommonPreConfigurator'])) {
            return $container->privates['EasyCorp\\Bundle\\EasyAdminBundle\\Field\\Configurator\\CommonPreConfigurator'];
        }

        return $container->privates['EasyCorp\\Bundle\\EasyAdminBundle\\Field\\Configurator\\CommonPreConfigurator'] = new \EasyCorp\Bundle\EasyAdminBundle\Field\Configurator\CommonPreConfigurator(($container->privates['property_accessor'] ?? self::getPropertyAccessorService($container)), $a);
    }
}
