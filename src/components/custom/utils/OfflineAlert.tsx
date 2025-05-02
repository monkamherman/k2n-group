
import { useState, useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';
import { ToastAction } from '@/components/ui/toast';

const OfflineAlert = () => {
    const { toast } = useToast();
    const [isOnline, setIsOnline] = useState<boolean>(navigator.onLine);
    const [hasNotified, setHasNotified] = useState<boolean>(false);

    useEffect(() => {
        // Handle "online" event
        const handleOnline = () => {
            setIsOnline(true);
            setHasNotified(false);
            toast({
                duration: 2000,
                variant: "default",
                title: "Back Online!",
                description: "You are reconnected to the internet.",
            });
        };

        // Handle "offline" event
        const handleOffline = () => {
            setIsOnline(false);
            if (!hasNotified) {
                toast({
                    duration: 4000,
                    variant: "destructive", 
                    title: "No Internet Connection",
                    description:
                        "You are currently offline. Check your connection to continue.",
                    action: (
                        <ToastAction altText="Retry">Retry</ToastAction>
                    ),
                });
                setHasNotified(true); // Prevent repeated alerts
            }
        };

        // Add event listeners
        window.addEventListener('online', handleOnline);
        window.addEventListener('offline', handleOffline);

        // Clean up event listeners
        return () => {
            window.removeEventListener('online', handleOnline);
            window.removeEventListener('offline', handleOffline);
        };
    }, [toast, hasNotified, isOnline]);

    return null;
};

export default OfflineAlert;
