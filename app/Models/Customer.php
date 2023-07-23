<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

/**
 * Class Customer
 *
 * @property int $id
 * @property string $first_name
 * @property string $last_name
 * @property string|null $email
 * @property string|null $phone
 * @property string|null $address
 * @property string|null $avatar
 * @property int $user_id
 * @property Carbon|null $created_at
 * @property Carbon|null $updated_at
 *
 * @property User $user
 * @property Collection|Order[] $orders
 *
 * @package App\Models
 */
class Customer extends Model
{
   use HasFactory;

	protected $table = 'customers';

	protected $casts = [
		'user_id' => 'int'
	];

	protected $fillable = [
		'full_name',
		'email',
		'phone',
		'address',
		'avatar',
	];



	public function orders()
	{
		return $this->hasMany(Order::class);
	}
}
