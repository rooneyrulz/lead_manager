from rest_framework.routers import DefaultRouter
from .views import LeadViewset

router = DefaultRouter(trailing_slash=False)
router.register('api/leads', LeadViewset, 'leads')

urlpatterns = router.urls
