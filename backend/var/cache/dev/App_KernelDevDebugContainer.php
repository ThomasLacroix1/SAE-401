<?php

// This file has been auto-generated by the Symfony Dependency Injection Component for internal use.

if (\class_exists(\ContainerUhYUuYy\App_KernelDevDebugContainer::class, false)) {
    // no-op
} elseif (!include __DIR__.'/ContainerUhYUuYy/App_KernelDevDebugContainer.php') {
    touch(__DIR__.'/ContainerUhYUuYy.legacy');

    return;
}

if (!\class_exists(App_KernelDevDebugContainer::class, false)) {
    \class_alias(\ContainerUhYUuYy\App_KernelDevDebugContainer::class, App_KernelDevDebugContainer::class, false);
}

return new \ContainerUhYUuYy\App_KernelDevDebugContainer([
    'container.build_hash' => 'UhYUuYy',
    'container.build_id' => '1c82e2f9',
    'container.build_time' => 1710839987,
    'container.runtime_mode' => \in_array(\PHP_SAPI, ['cli', 'phpdbg', 'embed'], true) ? 'web=0' : 'web=1',
], __DIR__.\DIRECTORY_SEPARATOR.'ContainerUhYUuYy');
