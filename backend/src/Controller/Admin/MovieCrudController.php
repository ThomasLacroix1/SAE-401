<?php

namespace App\Controller\Admin;

use App\Entity\Movie;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field\IdField;
use EasyCorp\Bundle\EasyAdminBundle\Field\AssociationField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;
use EasyCorp\Bundle\EasyAdminBundle\Field\BooleanField;

class MovieCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return Movie::class;
    }

    public function configureFields(string $pageName): iterable
   {
       yield TextField::new('name');
       yield TextField::new('director');
       yield TextField::new('description');
       yield TextField::new('synopsis'); 
       yield AssociationField::new('category');
       yield TextField::new('image');
       yield TextField::new('horizontal_image');
       yield TextField::new('time');
       yield TextField::new('url');
       yield BooleanField::new('in_front');
   }

}
