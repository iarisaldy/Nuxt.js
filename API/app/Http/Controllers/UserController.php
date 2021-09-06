<?php

namespace App\Http\Controllers;
use App\User;

class UserController extends Controller
{
    public function index()
    {
        $users = User::orderBy('create_at','desc')->paginate(10);
        return response()->json(['status' => 'success', 'data' => $users]);
    }
}
