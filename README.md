# brightstack Photo Gallery

> Front End Engineer: Douglas Perez


## Requirements

- [PostgreSQL](https://www.postgresql.org/download/)

- Node 6.13.0

## Development

### Installing Dependencies

From within the root directory:
```sh
npm i -g webpack
npm i
```

## Usage
-Start server * client using npm run dev:react npm run start

- **update this with seeding script to generate mock data in a CSV file

</br>

## PhotoGallery API

</br>

### Select home images matching a Home ID

-GET `api/homeimages/:id`

**Success Status Code:** `200`


**Returns:** JSON home images array.

```json
    {
      "id": INT,
      "Home_ID": INT,
      "ImageURL": STRING,
    }

```

## _HOME API_

-GET `/api/homeinfo/:id`

**Path Parameters:**
- `id` - Home ID

**Success Status Code:** `200`


**Returns:** Expects JSON array comprised of Home info.

```json
{
  {
  "id": INT,
  "AddressLine1": STRING,
  "AddressLine2": STRING,
  "AskingPrice": STRING,
  "NumBeds": STRING,
  "NumBaths": INT,
  "SqFt": INT,

  }
}
```

-POST `/api/HomeInfo`


**Request Body**
```json
{
  {
  "id": INT,
  "AddressLine1": STRING,
  "AddressLine2": STRING,
  "AskingPrice": INT,
  "NumBeds": INT,
  "NumBaths": INT,
  "SqFt": INT,
  }
}
  ```

### Path responses:
**Success Status Code:** `201`


### Response format:
* Returns: JSON

```json
    {
      "message": "Successfully added home info"
    }
```

```json
    {
      "message": "Failed to add home info."
    }
```

</br>

-Patch `/api/homeInfo/:id`

**Path Parameters:**
- `id` - Home ID

**Request Body**
*
```json
{
  {
  "id": INT,
  "AddressLine1": STRING,
  "AddressLine2": STRING,
  "AskingPrice": INT,
  "NumBeds": INT,
  "NumBaths": INT,
  "SqFT": INT,

  }
}
  ```

### Path responses:
**Success Status Code:** `201`


### Response format:
* Returns: JSON

```json
    {
      "message": "Successfully updated home"
    }
```

```json
    {
      "message": "Failed to update home."
    }
```
</br>

-DELETE `/api/homeInfo/:id`

### Path parameters:
</br>

- `id` - Home ID


### Path responses:
</br>
**Success Status Code:** `204`


### Response format:
* Returns: JSON

```json
    {
      "message": "Successfully deleted home"
    }
```

```json
    {
      "message": "Failed to deleted home."
    }
```

</br>



## __USER API__
 </br>

## Add a user

- POST `/api/users`

**Success Status Code:** `201`


**Request Body**: Expects JSON with the following keys.

```json
{
  "Id": INT,
  "Username": String,
  "Email": String,
  "Phone": String
}
```
</br>

-GET `/api/users/:userId`

**Path Parameters:**
- `id` - user ID

**Success Status Code:** `200`


**Returns:** Expects JSON with the following keys.

```json
{
  "Id": INT,
  "Username": String,
  "Email": String,
  "Phone": String
}
```
</br>

-Patch `/api/users/:userId`

**Path Parameters:**
- `id` - user ID

**Request Body**
*
```json
{
  "Id": INT,
  "Username": String,
  "Email": String,
  "Phone": String
}
```

### Path responses:
**Success Status Code:** `201`


### Response format:
* Returns: JSON

```json
    {
      "message": "Successfully added a user"
    }
```

```json
    {
      "message": "Failed to add a user."
    }
```

</br>

-DELETE `/api/user/:deleteId`

**Path Parameters:**
- `id` - user ID

**Request Body**

   ```id``` user ID



**Returns:**
**Success Status Code:** `204`


