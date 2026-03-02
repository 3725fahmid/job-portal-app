<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Application;
use Illuminate\Http\Request;

class ApplicationController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        return Application::all();
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
        $validated = $request->validate(['job_id' => 'required|integer', 'name' => 'required|string', 'email' => 'required|email', 'resume_link' => 'required|url', 'cover_note' => 'nullable|string',]);
        $application = Application::create($validated);
        return response()->json($application, 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
        return Application::findOrFail($id);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
        $application = Application::findOrFail($id);
        $application->update($request->all());
        return response()->json($application);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
        Application::destroy($id);
        return response()->json(null, 204);
    }
}
