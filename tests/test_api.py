import pytest
import requests

BASE_URL = "http://localhost:3000/users"

VALID_ID = "123456789"  
INVALID_ID = "123"
NON_EXISTENT_ID = "000000000000000000000000"

def test_valid_user():
    response = requests.get(f"{BASE_URL}/{VALID_ID}")
    assert response.status_code == 200
    data = response.json()
    assert "name" in data
    assert data["age"] > 21

def test_user_not_found():
    response = requests.get(f"{BASE_URL}/{NON_EXISTENT_ID}")
    assert response.status_code == 404

def test_invalid_object_id():
    response = requests.get(f"{BASE_URL}/{INVALID_ID}")
    assert response.status_code == 400