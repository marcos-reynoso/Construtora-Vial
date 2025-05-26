import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';
import { CheckCircle2, AlertCircle } from 'lucide-react';
import { usePage } from '@inertiajs/react';
import { useEffect,useState } from 'react';

export default function FlashMessage() {
  const { flash } = usePage().props as { flash?: { message?: string; error?: string } };
  const [visible, setVisible] = useState<boolean>(!!flash?.message || !!flash?.error);

  useEffect(() => {
    if (flash?.message || flash?.error) {
      setVisible(true);

      const timer = setTimeout(() => {
        setVisible(false);
      }, 5000); 

      return () => clearTimeout(timer); 
    }
  }, [flash?.message, flash?.error]);

  if (!visible) return null;

  if (!flash?.message && !flash?.error) return null;

  const isError = !!flash.error;

  return (
    <Alert
    
      variant="default"
      className={`mb-4 border-l-4 ${
        isError
          ? 'border-red-500 bg-red-50 text-red-800'
          : 'border-green-500 bg-green-50 text-green-800'
      }`}
    >
      {isError ? (
        <AlertCircle className="h-5 w-5 text-red-600" />
      ) : (
        <CheckCircle2 className="h-5 w-5 text-green-600" />
      )}
      <AlertTitle>{isError ? 'Error' : 'Éxito'}</AlertTitle>
      <AlertDescription>
        {isError ? flash.error : flash.message}
      </AlertDescription>
    
    </Alert>

  );
}