<?php

<<<<<<<< Updated upstream:backend/var/cache/dev/ContainerWKLXeHK/getMaker_Renderer_FormTypeRendererService.php
namespace ContainerWKLXeHK;
========
namespace ContainerV6rZdjZ;

>>>>>>>> Stashed changes:backend/var/cache/dev/ContainerV6rZdjZ/getMaker_Renderer_FormTypeRendererService.php

use Symfony\Component\DependencyInjection\Argument\RewindableGenerator;
use Symfony\Component\DependencyInjection\ContainerInterface;
use Symfony\Component\DependencyInjection\Exception\RuntimeException;

/**
 * @internal This class has been auto-generated by the Symfony Dependency Injection Component.
 */
class getMaker_Renderer_FormTypeRendererService extends App_KernelDevDebugContainer
{
    /**
     * Gets the private 'maker.renderer.form_type_renderer' shared service.
     *
     * @return \Symfony\Bundle\MakerBundle\Renderer\FormTypeRenderer
     */
    public static function do($container, $lazyLoad = true)
    {
        include_once \dirname(__DIR__, 4).'/vendor/symfony/maker-bundle/src/Renderer/FormTypeRenderer.php';

        return $container->privates['maker.renderer.form_type_renderer'] = new \Symfony\Bundle\MakerBundle\Renderer\FormTypeRenderer(($container->privates['maker.generator'] ?? $container->load('getMaker_GeneratorService')));
    }
}