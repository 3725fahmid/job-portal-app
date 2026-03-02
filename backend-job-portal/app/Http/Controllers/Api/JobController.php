<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\JobPost;
use Illuminate\Http\Request;

class JobController extends Controller
{
    //get /api/jobPost
    public function index()
    {
        return JobPost::latest()->get();
    }
    // GET /api/jobs/{id}
    public function show($id)
    {
        return JobPost::findOrFail($id);
    }

    // POST /api/jobs (Admin only)
    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required|string',
            'description' => 'required|string',
            'company' => 'nullable|string',
        ]);

        $jobPost = JobPost::create($request->all());

        return response()->json([
            'message' => 'Job post created successfully',
            'jobPost' => $jobPost
        ], 201);
    }

    // DELETE /api/jobs/{id} (Admin only)
    public function destroy($id)
    {
        $job = JobPost::findOrFail($id);
        $job->delete();

        return response()->json([
            'message' => 'Job post deleted successfully'
        ]);
    }
}
