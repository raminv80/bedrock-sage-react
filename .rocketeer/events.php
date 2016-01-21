<?php
use Rocketeer\Facades\Rocketeer;

Rocketeer::before('dependencies', function ($task) {
                return $task->share('.env');
});

Rocketeer::after('dependencies', function ($task) {
                return $task->runForCurrentRelease('phing');
});
