<?php

// This file has been auto-generated by the Symfony Routing Component.

return [
    '_preview_error' => [['code', '_format'], ['_controller' => 'error_controller::preview', '_format' => 'html'], ['code' => '\\d+'], [['variable', '.', '[^/]++', '_format', true], ['variable', '/', '\\d+', 'code', true], ['text', '/_error']], [], [], []],
    '_wdt' => [['token'], ['_controller' => 'web_profiler.controller.profiler::toolbarAction'], [], [['variable', '/', '[^/]++', 'token', true], ['text', '/_wdt']], [], [], []],
    '_profiler_home' => [[], ['_controller' => 'web_profiler.controller.profiler::homeAction'], [], [['text', '/_profiler/']], [], [], []],
    '_profiler_search' => [[], ['_controller' => 'web_profiler.controller.profiler::searchAction'], [], [['text', '/_profiler/search']], [], [], []],
    '_profiler_search_bar' => [[], ['_controller' => 'web_profiler.controller.profiler::searchBarAction'], [], [['text', '/_profiler/search_bar']], [], [], []],
    '_profiler_phpinfo' => [[], ['_controller' => 'web_profiler.controller.profiler::phpinfoAction'], [], [['text', '/_profiler/phpinfo']], [], [], []],
    '_profiler_xdebug' => [[], ['_controller' => 'web_profiler.controller.profiler::xdebugAction'], [], [['text', '/_profiler/xdebug']], [], [], []],
    '_profiler_font' => [['fontName'], ['_controller' => 'web_profiler.controller.profiler::fontAction'], [], [['text', '.woff2'], ['variable', '/', '[^/\\.]++', 'fontName', true], ['text', '/_profiler/font']], [], [], []],
    '_profiler_search_results' => [['token'], ['_controller' => 'web_profiler.controller.profiler::searchResultsAction'], [], [['text', '/search/results'], ['variable', '/', '[^/]++', 'token', true], ['text', '/_profiler']], [], [], []],
    '_profiler_open_file' => [[], ['_controller' => 'web_profiler.controller.profiler::openAction'], [], [['text', '/_profiler/open']], [], [], []],
    '_profiler' => [['token'], ['_controller' => 'web_profiler.controller.profiler::panelAction'], [], [['variable', '/', '[^/]++', 'token', true], ['text', '/_profiler']], [], [], []],
    '_profiler_router' => [['token'], ['_controller' => 'web_profiler.controller.router::panelAction'], [], [['text', '/router'], ['variable', '/', '[^/]++', 'token', true], ['text', '/_profiler']], [], [], []],
    '_profiler_exception' => [['token'], ['_controller' => 'web_profiler.controller.exception_panel::body'], [], [['text', '/exception'], ['variable', '/', '[^/]++', 'token', true], ['text', '/_profiler']], [], [], []],
    '_profiler_exception_css' => [['token'], ['_controller' => 'web_profiler.controller.exception_panel::stylesheet'], [], [['text', '/exception.css'], ['variable', '/', '[^/]++', 'token', true], ['text', '/_profiler']], [], [], []],
    'admin' => [[], ['_controller' => 'App\\Controller\\Admin\\DashboardController::index'], [], [['text', '/admin']], [], [], []],
    'app_api' => [[], ['_controller' => 'App\\Controller\\ApiController::index'], [], [['text', '/api']], [], [], []],
    'app_api_movies' => [[], ['_controller' => 'App\\Controller\\ApiController::readMovies'], [], [['text', '/api/movies']], [], [], []],
    'app_api_movie' => [['id'], ['_controller' => 'App\\Controller\\ApiController::readMovie'], [], [['variable', '/', '[^/]++', 'id', true], ['text', '/api/movies']], [], [], []],
    'app_api_categories' => [[], ['_controller' => 'App\\Controller\\ApiController::readCategories'], [], [['text', '/api/categories']], [], [], []],
    'app_api_category' => [['id'], ['_controller' => 'App\\Controller\\ApiController::readCategory'], [], [['variable', '/', '[^/]++', 'id', true], ['text', '/api/categories']], [], [], []],
    'app_api_movies_in_front' => [[], ['_controller' => 'App\\Controller\\ApiController::readMoviesInFront'], [], [['text', '/api/movies_in_front']], [], [], []],
    'app_api_actual_user' => [[], ['_controller' => 'App\\Controller\\ApiController::actualUser'], [], [['text', '/api/actual_user']], [], [], []],
    'app_register' => [[], ['_controller' => 'App\\Controller\\RegistrationController::register'], [], [['text', '/register']], [], [], []],
    'app_login' => [[], ['_controller' => 'App\\Controller\\SecurityController::login'], [], [['text', '/login']], [], [], []],
    'app_logout' => [[], ['_controller' => 'App\\Controller\\SecurityController::logout'], [], [['text', '/logout']], [], [], []],
    'app_user_set_email' => [[], ['_controller' => 'App\\Controller\\UserController::setEmail'], [], [['text', '/user/set_email']], [], [], []],
    'App\Controller\Admin\DashboardController::index' => [[], ['_controller' => 'App\\Controller\\Admin\\DashboardController::index'], [], [['text', '/admin']], [], [], []],
    'App\Controller\ApiController::index' => [[], ['_controller' => 'App\\Controller\\ApiController::index'], [], [['text', '/api']], [], [], []],
    'App\Controller\ApiController::readMovies' => [[], ['_controller' => 'App\\Controller\\ApiController::readMovies'], [], [['text', '/api/movies']], [], [], []],
    'App\Controller\ApiController::readMovie' => [['id'], ['_controller' => 'App\\Controller\\ApiController::readMovie'], [], [['variable', '/', '[^/]++', 'id', true], ['text', '/api/movies']], [], [], []],
    'App\Controller\ApiController::readCategories' => [[], ['_controller' => 'App\\Controller\\ApiController::readCategories'], [], [['text', '/api/categories']], [], [], []],
    'App\Controller\ApiController::readCategory' => [['id'], ['_controller' => 'App\\Controller\\ApiController::readCategory'], [], [['variable', '/', '[^/]++', 'id', true], ['text', '/api/categories']], [], [], []],
    'App\Controller\ApiController::readMoviesInFront' => [[], ['_controller' => 'App\\Controller\\ApiController::readMoviesInFront'], [], [['text', '/api/movies_in_front']], [], [], []],
    'App\Controller\ApiController::actualUser' => [[], ['_controller' => 'App\\Controller\\ApiController::actualUser'], [], [['text', '/api/actual_user']], [], [], []],
    'App\Controller\RegistrationController::register' => [[], ['_controller' => 'App\\Controller\\RegistrationController::register'], [], [['text', '/register']], [], [], []],
    'App\Controller\SecurityController::login' => [[], ['_controller' => 'App\\Controller\\SecurityController::login'], [], [['text', '/login']], [], [], []],
    'App\Controller\SecurityController::logout' => [[], ['_controller' => 'App\\Controller\\SecurityController::logout'], [], [['text', '/logout']], [], [], []],
    'App\Controller\UserController::setEmail' => [[], ['_controller' => 'App\\Controller\\UserController::setEmail'], [], [['text', '/user/set_email']], [], [], []],
];
