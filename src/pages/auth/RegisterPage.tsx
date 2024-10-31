import React from 'react';
import { Link } from 'react-router-dom';
import { AuthForm } from '../../components/auth/AuthForm';
import { RegisterData } from '../../types/auth';
import { useAuth } from '../../hooks/useAuth';

export function RegisterPage() {
  const { register } = useAuth();

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Create your account
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Already have an account?{' '}
          <Link to="/login" className="font-medium text-[#FF6B35] hover:text-[#ff5a1f]">
            Sign in
          </Link>
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <AuthForm type="register" onSubmit={(data: RegisterData) => register(data)} />
        </div>
      </div>
    </div>
  );
}