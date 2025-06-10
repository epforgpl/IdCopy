<?php

namespace Mp\IdCopy;

use Laravel\Nova\Fields\ID;

class IdCopy extends ID
{
    /**
     * The field's component.
     *
     * @var string
     */
    public $component = 'id-copy';
}
