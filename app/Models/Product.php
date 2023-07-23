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
 * Class Product
 *
 * @property int $id
 * @property string $name
 * @property string|null $description
 * @property string|null $image
 * @property string $barcode
 * @property float $price
 * @property bool $status
 * @property int $quantity
 * @property int $category_id
 * @property Carbon|null $created_at
 * @property Carbon|null $updated_at
 *
 * @property Category $category
 * @property Collection|OrderItem[] $order_items
 *
 * @package App\Models
 */
class Product extends Model
{
    protected $table = 'products';
    use HasFactory;

    protected $casts = [
        'price' => 'float',
        //'status' => 'bool',
        'quantity' => 'int',
        'category_id' => 'int'
    ];

    protected $fillable = [
        'name',
        'description',
        'image',
        'barcode',
        'price',
        'status',
        'quantity',
        'category_id'
    ];
    protected $appends = ['img'];

    public function category()
    {
        return $this->belongsTo(Category::class);
    }

    public function order_items()
    {
        return $this->hasMany(OrderItem::class);
    }

    public function getImgAttribute()
    {

        return 'storage\app\products/' . $this->image;

    }
}
