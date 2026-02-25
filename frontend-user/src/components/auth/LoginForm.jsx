import { useState } from 'react';
import Button from '../common/Button';

function LoginForm() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Données du formulaire soumises :", formData);
    alert(`Connexion tentée pour : ${formData.email}`);
  };

  return (
    <div className="max-w-md mx-auto bg-gray-900 border border-gray-800 rounded-2xl p-8 shadow-2xl">
      <h2 className="text-2xl font-bold mb-6 text-white text-center">Connexion</h2>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-400 mb-2">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="votre@email.com"
            className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl focus:outline-none focus:border-primary text-white transition-colors"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-400 mb-2">
            Mot de passe
          </label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="••••••••"
            className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl focus:outline-none focus:border-primary text-white transition-colors"
            required
          />
        </div>

        <Button type="submit" className="w-full py-4">
          Valider
        </Button>
      </form>

      <div className="mt-6 p-4 bg-gray-800/50 rounded-lg">
        <p className="text-xs text-gray-500 font-mono">
          State Debug: {JSON.stringify(formData)}
        </p>
      </div>
    </div>
  );
}

export default LoginForm;
