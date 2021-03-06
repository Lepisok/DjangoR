
from rest_framework import mixins, viewsets
from .models import CustomUser
from .serializers import UserModelSerializer, UserModelSerializerNew


class UserModelViewSet(mixins.ListModelMixin, mixins.RetrieveModelMixin, mixins.UpdateModelMixin, viewsets.GenericViewSet):
    serializer_class = UserModelSerializer
    queryset = CustomUser.objects.all()

    def get_serializer_class(self):
        if self.request.version == '0.2':
            return UserModelSerializerNew
        return UserModelSerializer
